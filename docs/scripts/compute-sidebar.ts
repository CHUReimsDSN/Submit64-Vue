import fs from "fs";
import path from "path";

type TSidebarEntry = {
  text: string;
  items: TSidebarItem[];
};
type TSidebarItem = {
  text: string;
  link: string;
};

export function computeSidebar() {
  const sidebarsData: Record<string, TSidebarEntry[]> = {};
  const fileToWritePath = ".vitepress/generated/sidebar.ts";
  const foldersSidebar = [
    {
      path: "./documentation",
      label: "Documentation",
      children: [
        {
          path: "exemples",
          label: "Exemples",
        },
      ],
    },
  ];
  for (const folder of foldersSidebar) {
    const folderKey = `/${folder.path.replaceAll(".", "").replaceAll("/", "")}/`;
    const folderPath = path.resolve(process.cwd(), folder.path);
    const subFolderList: TSidebarEntry[] = [];

    const getSubFolderEntry = (folderTitle: string, folderPathEntry: string) => {
      const subFolders: TSidebarEntry = {
        text: folderTitle,
        items: [],
      };

      const files = fs
        .readdirSync(folderPathEntry)
        .filter((f) => f.endsWith(".md"))
        .sort();

      files.forEach((file) => {
        const filePath = path.join(folderPathEntry, file);
        const content = fs.readFileSync(filePath, "utf-8");
        const title = content.match(/^\s*title:\s*(.+)$/m)?.[0].replaceAll('title: ', '') ?? "???";

        subFolders.items.push({
          text: title,
          link: filePath,
        });
      });
      return subFolders;
    };
    const firstEntry = getSubFolderEntry(folder.label, folderPath);
    subFolderList.push(firstEntry);

    folder.children.forEach((subFolder) => {
      const subfolderPath = `.${folderKey}${subFolder.path.replaceAll(".", "").replaceAll("/", "")}/`;
      const subFolderEntry = getSubFolderEntry(subFolder.label, subfolderPath);
      subFolderList.push(subFolderEntry);
    });

    sidebarsData[folderKey] = subFolderList;
  }

  const sidebarString = `export const sidebar = ${JSON.stringify(sidebarsData)}`;
  fs.writeFileSync(fileToWritePath, sidebarString);
  console.log("✅ Sidebar computed");
}
