import "./App.css";
import Tabs from "./Tabs";
import TabsContent from "./TabsContent";

function App() {
  return (
    <div>
      <h1>Tabs</h1>
      <Tabs defaultActiveTab={1}>
        <TabsContent label="Tab 1">
          <p>Content for Tab 1</p>
        </TabsContent>
        <TabsContent label="Tab 2">
          <p>Content for Tab 2</p>
        </TabsContent>
        <TabsContent label="Tab 3" disabled>
          <p>Content for Tab 3</p>
        </TabsContent>
        <TabsContent label="Tab 4">
          <p>Content for Tab 4</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
