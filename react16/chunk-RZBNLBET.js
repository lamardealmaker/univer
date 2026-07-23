import {
  require_react
} from "./chunk-WDOGA3AR.js";
import {
  __toESM
} from "./chunk-HECJ2TYE.js";

// ../node_modules/.pnpm/@univerjs+icons@1.33.0_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@univerjs/icons/dist/esm/folder-icon.js
var import_react2 = __toESM(require_react(), 1);

// ../node_modules/.pnpm/@univerjs+icons@1.33.0_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@univerjs/icons/dist/esm/base.js
var import_react = __toESM(require_react(), 1);
function IconBase({ ref, ...props }) {
  const { icon, id, className, extend, ...restProps } = props;
  const cls = `univerjs-icon univerjs-icon-${id} ${className || ""}`.trim();
  const idSuffix = (0, import_react.useRef)(`_${generateShortUuid()}`);
  return render(icon, `${id}`, {
    defIds: icon.defIds,
    idSuffix: idSuffix.current
  }, {
    ref,
    className: cls,
    ...restProps
  }, extend);
}
function render(node, id, runtimeProps, rootProps, extend) {
  return (0, import_react.createElement)(node.tag, {
    key: id,
    ...replaceRuntimeIdsAndExtInAttrs(node, runtimeProps, extend),
    ...rootProps
  }, (replaceRuntimeIdsInDefs(node, runtimeProps).children || []).map((child, index) => render(child, `${id}-${node.tag}-${index}`, runtimeProps, void 0, extend)));
}
function replaceRuntimeIdsAndExtInAttrs(node, runtimeProps, extend) {
  const attrs = { ...node.attrs };
  if ((extend == null ? void 0 : extend.colorChannel1) && attrs.fill === "colorChannel1") attrs.fill = extend.colorChannel1;
  if ((extend == null ? void 0 : extend.colorChannel1) && attrs.stroke === "colorChannel1") attrs.stroke = extend.colorChannel1;
  if (node.tag === "mask" && attrs.id) attrs.id = attrs.id + runtimeProps.idSuffix;
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "mask" && typeof value === "string") attrs[key] = value.replace(/url\(#(.*)\)/, `url(#$1${runtimeProps.idSuffix})`);
  });
  const { defIds } = runtimeProps;
  if (!defIds || defIds.length === 0) return attrs;
  if (node.tag === "use" && attrs["xlink:href"]) attrs["xlink:href"] = attrs["xlink:href"] + runtimeProps.idSuffix;
  Object.entries(attrs).forEach(([key, value]) => {
    if (typeof value === "string") attrs[key] = value.replace(/url\(#(.*)\)/, `url(#$1${runtimeProps.idSuffix})`);
  });
  return attrs;
}
function replaceRuntimeIdsInDefs(node, runtimeProps) {
  var _a;
  const { defIds } = runtimeProps;
  if (!defIds || defIds.length === 0) return node;
  if (node.tag === "defs" && ((_a = node.children) == null ? void 0 : _a.length)) return {
    ...node,
    children: node.children.map((child) => {
      if (typeof child.attrs.id === "string") {
        if (defIds && defIds.includes(child.attrs.id)) return {
          ...child,
          attrs: {
            ...child.attrs,
            id: child.attrs.id + runtimeProps.idSuffix
          }
        };
      }
      return child;
    })
  };
  return node;
}
function generateShortUuid() {
  return Math.random().toString(36).substring(2, 8);
}
IconBase.displayName = "UniverIcon";

// ../node_modules/.pnpm/@univerjs+icons@1.33.0_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@univerjs/icons/dist/esm/folder-icon.js
var element = {
  "tag": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M0.571533 12.0016V4.69797C0.571533 3.37249 1.64605 2.29797 2.97153 2.29797H5.00397C5.90947 2.29797 6.77882 2.65328 7.42511 3.2875C7.84704 3.70155 8.4146 3.93351 9.00576 3.93351H11.6938C12.8536 3.93351 13.7938 4.87372 13.7938 6.03351V6.83533H13.8982C15.064 6.83533 15.8384 8.04207 15.3527 9.10188L13.6724 12.7686C13.4118 13.3374 12.8435 13.702 12.2179 13.702H2.17045C1.20587 13.702 0.515561 12.8793 0.571533 12.0016ZM1.77153 4.69797C1.77153 4.03523 2.30879 3.49797 2.97153 3.49797H5.00397C5.59513 3.49797 6.16269 3.72993 6.58462 4.14399C7.23091 4.77821 8.10026 5.13351 9.00576 5.13351H11.6938C12.1909 5.13351 12.5938 5.53646 12.5938 6.03351V6.83533H4.64069C3.6604 6.83533 2.76344 7.38669 2.32081 8.26136L1.77153 9.34679V4.69797ZM1.77153 12.1373V12.0664C1.77594 12.0179 1.78952 11.9689 1.81355 11.9214L3.39152 8.80319C3.62986 8.33222 4.11284 8.03533 4.64069 8.03533H13.8982C14.1896 8.03533 14.3832 8.33701 14.2618 8.60197L12.5815 12.2687C12.5164 12.4109 12.3743 12.502 12.2179 12.502H2.17045C1.95161 12.502 1.78924 12.3326 1.77153 12.1373Z",
      "fillRule": "evenodd",
      "clipRule": "evenodd"
    }
  }]
};
var FolderIcon = (0, import_react2.forwardRef)(function FolderIcon2(props, ref) {
  return (0, import_react2.createElement)(IconBase, Object.assign({}, props, {
    id: "folder-icon",
    ref,
    icon: element
  }));
});
FolderIcon.displayName = "FolderIcon";

export {
  FolderIcon
};
