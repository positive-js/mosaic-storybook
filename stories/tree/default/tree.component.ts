import { Component, ViewEncapsulation } from '@angular/core';
import { FlatTreeControl } from '@ptsecurity/cdk/tree';
import { McTreeFlatDataSource, McTreeFlattener } from '@ptsecurity/mosaic';

class FileNode {
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
    parent: any;
}

export const DATA_OBJECT = {
    rootNode_1: 'app',
    Pictures: {
        Sun: 'png',
        Woods: 'jpg',
        PhotoBoothLibrary: {
            Contents: 'dir',
            Pictures: 'dir'
        }
    },
    Documents: {
        Pictures: 'Pictures',
        angular: {
            src: {
                core: 'ts',
                compiler: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        Tutorial: 'html',
        November: 'pdf',
        October: 'pdf'
    },
    Applications: {
        Chrome: 'app',
        Calendar: 'app',
        Webstorm: 'app'
    }
};

/**
 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
 * The return value is the list of `FileNode`.
 */
export function buildFileTree(value: any, level: number): FileNode[] {
    const data: any[] = [];

    for (const k of Object.keys(value)) {
        const v = value[k];
        const node = new FileNode();

        node.name = `${k}`;

        if (v === null || v === undefined) {
            // no action
        } else if (typeof v === 'object') {
            node.children = buildFileTree(v, level + 1);
        } else {
            node.type = v;
        }

        data.push(node);
    }

    return data;
}

@Component({
    selector: 'tree-storie-component',
    templateUrl: './tree.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class TreeComponent {
    treeControl: FlatTreeControl<FileFlatNode>;
    dataSource: McTreeFlatDataSource<FileNode, FileFlatNode>;
    treeFlattener: McTreeFlattener<FileNode, FileFlatNode>;

    selected = 'Downloads';

    constructor() {
        this.treeFlattener = new McTreeFlattener(
            this.transformer, this.getLevel, this.isExpandable, this.getChildren
        );

        this.treeControl = new FlatTreeControl<FileFlatNode>(this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
        this.dataSource = new McTreeFlatDataSource(this.treeControl, this.treeFlattener);

        this.dataSource.data = buildFileTree(DATA_OBJECT, 0);
    }

    onFilterChange(value): void {
        this.treeControl.filterNodes(value);
    }

    transformer(node: FileNode, level: number, parent: any) {
        const flatNode = new FileFlatNode();

        flatNode.name = node.name;
        flatNode.parent = parent;
        flatNode.type = node.type;
        flatNode.level = level;
        flatNode.expandable = !!node.children;

        return flatNode;
    }

    hasChild(_: number, nodeData: FileFlatNode) { return nodeData.expandable; }

    hasNestedChild(_: number, nodeData: FileNode) {
        return !(nodeData.type);
    }

    onNavigationChange($event) {
        console.log('onNavigationChange');
    }

    onSelectionChange($event) {
        console.log('onSelectionChange');
    }

    private getLevel = (node: FileFlatNode) => {
        return node.level;
    }

    private isExpandable = (node: FileFlatNode) => {
        return node.expandable;
    }

    private getChildren = (node: FileNode): FileNode[] => {
        return node.children;
    }

    private getValue = (node: FileNode): string => {
        return node.name;
    }

    private getViewValue = (node: FileNode): string => {
        return node.name;
    }
}
