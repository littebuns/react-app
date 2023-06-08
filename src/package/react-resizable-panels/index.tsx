import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const ResizePanel = () => {
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={20} minSize={20}>
        left
      </Panel>
      <PanelResizeHandle className="w-2 bg-blue-800" />
      <Panel minSize={30}>middle</Panel>
      <PanelResizeHandle
        style={{ transform: "background-color .25s linear" }}
        className="  hover:bg-purple-700	w-1		"
      />
      <Panel defaultSize={20} minSize={20}>
        right
      </Panel>
    </PanelGroup>
  );
};
