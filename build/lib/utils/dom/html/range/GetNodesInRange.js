"use strict";
var GetNodesInRange = (function () {
    function GetNodesInRange() {
    }
    GetNodesInRange.get = function (range) {
        var start, end, commonAncestor, nodes, node;
        start = range.startContainer;
        end = range.endContainer;
        commonAncestor = range.commonAncestorContainer;
        nodes = [];
        for (node = start.parentNode; node; node = node.parentNode) {
            nodes.push(node);
            if (node == commonAncestor)
                break;
        }
        nodes.reverse();
        for (node = start; node; node = GetNodesInRange.getNextNode(node)) {
            nodes.push(node);
            if (node == end)
                break;
        }
        return nodes;
    };
    GetNodesInRange.getNextNode = function (node) {
        if (node.firstChild)
            return node.firstChild;
        while (node) {
            if (node.nextSibling)
                return node.nextSibling;
            node = node.parentNode;
        }
    };
    return GetNodesInRange;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetNodesInRange.get;
