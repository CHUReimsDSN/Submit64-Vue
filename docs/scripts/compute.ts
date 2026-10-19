import {
  computeSidebar,
  computeVersion,
  computeApiDefinition,
  computeIndexMd,
} from "vitepress-bigbang/scripts";

console.log("Compute started...");
computeApiDefinition();
computeSidebar();
computeVersion({ mode: "package.json" });
computeIndexMd();
console.log("🎉 Compute done");
