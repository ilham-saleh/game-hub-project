import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" `,
        lg: ` "nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"red"}>
        Nav
      </GridItem>
      {/* show component makes sure to only render aside section on screens above large screen devices */}
      <Show above="lg">
        <GridItem area={"aside"} bg={"yellow"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"green"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
