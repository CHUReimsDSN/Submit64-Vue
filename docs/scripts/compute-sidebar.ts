import fs from "fs";
import path from "path";

type TSidebarEntry = {
  text: string;
  icon?: string;
  link?: string;
  items?: TSidebarEntry[];
  active: boolean;
  collapsed: boolean;
};

export function computeSidebar() {
  const getSidebarEntry = (folderName: string): TSidebarEntry[] => {
    const folderAbsPath = path.resolve(process.cwd(), folderName);
    const entries: TSidebarEntry[] = [];
    if (!fs.existsSync(folderAbsPath)) {
      console.warn(`⚠️ Dossier non trouvé: ${folderAbsPath}`);
      return entries;
    }

    const dirEntries = fs.readdirSync(folderAbsPath).sort();
    for (const dirEntry of dirEntries) {
      if (dirEntry === "root.md") {
        continue;
      }
      if (dirEntry.endsWith(".md")) {
        const filePath = path.join(folderAbsPath, dirEntry);
        const content = fs.readFileSync(filePath, "utf-8");
        const title =
          content.match(/^\s*title:\s*(.+)$/m)?.[1]?.trim() ?? "???";
        const icon = content.match(/^\s*icon:\s*(.+)$/m)?.[1]?.trim();
        const link =
          "/" +
          path.posix.join(
            path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
          );
        const item: TSidebarEntry = { text: title, icon, link: link, active: false, collapsed: false };
        entries.push(item);
      } else {
        const item: TSidebarEntry = { text: "???", items: [], active: false, collapsed: false };
        const filePath = path.join(folderAbsPath, dirEntry);
        const indexFilePath = path.join(folderAbsPath, dirEntry, "root.md");
        if (fs.existsSync(indexFilePath)) {
          const content = fs.readFileSync(indexFilePath, "utf-8");
          item.text =
            content.match(/^\s*title:\s*(.+)$/m)?.[1]?.trim() ?? "???";
          item.icon = content.match(/^\s*icon:\s*(.+)$/m)?.[1]?.trim();
        }
        item.items = getSidebarEntry(filePath);
        entries.push(item);
      }
    }
    return entries;
  };

  const fileToWritePath = "./.vitepress/generated/sidebar.ts";
  const rootFolder = "./documentation";
  const sidebarsData = getSidebarEntry(rootFolder);
  const sidebarString = `export type TSidebarEntry = {
  text: string;
  icon?: string;
  link?: string;
  items?: TSidebarEntry[];
  active: boolean;
  collapsed: boolean;
};

export const sidebar: TSidebarEntry[] = ${JSON.stringify(sidebarsData, null, 2)};`;
  fs.mkdirSync(path.dirname(fileToWritePath), { recursive: true });
  fs.writeFileSync(fileToWritePath, sidebarString);

  console.log("✅ Sidebar computed");
}
