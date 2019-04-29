import {Component, Injectable, Input} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FlatTreeControl } from '@ptsecurity/cdk/tree';
import { McTreeFlatDataSource, McTreeFlattener} from '@ptsecurity/mosaic/tree';

import { McTreeSelectChange} from '@ptsecurity/mosaic/tree-select';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';


export class FileNode {
    children: FileNode[];
    name: string;
    type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
    name: string;
    type: any;
    level: number;
    expandable: boolean;
}

export const TREE_DATA = `
  {
  "rootNode_1": "app",
  "Pictures": {
        "Sun": "png",
        "Woods": "jpg",
        "Photo Booth Library": {
          "Contents": "dir",
          "Pictures": "dir"
        }
    },
    "Documents": {
      "angular": {
        "src": {
          "core": "ts",
          "compiler": "ts"
        }
      },
      "material2": {
        "src": {
          "button": "ts",
          "checkbox": "ts",
          "input": "ts"
        }
      }
    },
    "Downloads": {
        "Tutorial": "html",
        "November": "pdf",
        "October": "pdf"
    },
    "Applications": {
        "Chrome": "app",
        "Calendar": "app",
        "Webstorm": "app"
    }
}`;

@Injectable()
export class FileDatabase {
    dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

    get data(): FileNode[] { return this.dataChange.value; }

    constructor() {
        this.initialize();
    }

    initialize() {
        // Parse the string to json object.
        const dataObject = JSON.parse(TREE_DATA);

        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        const data = this.buildFileTree(dataObject, 0);

        // Notify the change.
        this.dataChange.next(data);
    }

    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    buildFileTree(value: any, level: number): FileNode[] {
        const data: any[] = [];

        for (const k of Object.keys(value)) {
            const v = value[k];
            const node = new FileNode();

            node.name = `${k}`;

            if (v === null || v === undefined) {
                // no action
            } else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            } else {
                node.type = v;
            }

            data.push(node);
        }

        return data;
    }
}

@Component({
    selector: 'tree-select-story',
    template: require('./tree-select.component.html'),
    providers: [FileDatabase]
})
export class TreeSelectComponent {
    @Input()
    disabledItemName = 'Downloads';

    @Input()
    disabled: boolean = false;

    control = new FormControl('rootNode_1');

    select: any;

    treeControl: FlatTreeControl<FileFlatNode>;
    treeFlattener: McTreeFlattener<FileNode, FileFlatNode>;

    dataSource: McTreeFlatDataSource<FileNode, FileFlatNode>;

    singleSelected = 'Normal';
    multipleSelected = ['Normal', 'Hovered', 'Selected', 'Selected1'];

    singleSelectFormControl = new FormControl('', Validators.required);

    multiSelectSelectFormControl = new FormControl([], Validators.pattern(/^w/));

    constructor(database: FileDatabase) {
        this.treeFlattener = new McTreeFlattener(
            this.transformer, this.getLevel, this.isExpandable, this.getChildren
        );

        this.treeControl = new FlatTreeControl<FileFlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new McTreeFlatDataSource(this.treeControl, this.treeFlattener);

        database.dataChange.subscribe((data) => {
            this.dataSource.data = data;
        });
    }

    transformer(node: FileNode, level: number) {
        const flatNode = new FileFlatNode();

        flatNode.name = node.name;
        flatNode.type = node.type;
        flatNode.level = level;
        flatNode.expandable = !!node.children;

        return flatNode;
    }

    hasChild(_: number, nodeData: FileFlatNode) {
        return nodeData.expandable;
    }

    onSelectionChange($event: McTreeSelectChange) {
        console.log(`onSelectionChange: ${$event.value}`);
    }

    private getLevel(node: FileFlatNode) { return node.level; }

    private isExpandable(node: FileFlatNode) { return node.expandable; }

    private getChildren = (node: FileNode): Observable<FileNode[]> => {
        return observableOf(node.children);
    }
}
