var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/ThreeBox.tsx
import {
  createElement
} from "react";
import { useRef, useState } from "react";
function ThreeBox({ fiber }) {
  const { Canvas, useFrame } = fiber;
  function Box(props) {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => mesh.current.rotation.x += 0.01);
    return /* @__PURE__ */ createElement("mesh", __spreadProps(__spreadValues({}, props), {
      ref: mesh,
      scale: active ? 1.5 : 1,
      onClick: (event) => setActive(!active),
      onPointerOver: (event) => setHover(true),
      onPointerOut: (event) => setHover(false)
    }), /* @__PURE__ */ createElement("boxGeometry", {
      args: [1, 1, 1]
    }), /* @__PURE__ */ createElement("meshStandardMaterial", {
      color: hovered ? "hotpink" : "orange"
    }));
  }
  return /* @__PURE__ */ createElement(Canvas, null, /* @__PURE__ */ createElement("ambientLight", null), /* @__PURE__ */ createElement("pointLight", {
    position: [10, 10, 10]
  }), /* @__PURE__ */ createElement(Box, {
    position: [-1.2, 0, 0]
  }), /* @__PURE__ */ createElement(Box, {
    position: [1.2, 0, 0]
  }));
}
export {
  ThreeBox
};
