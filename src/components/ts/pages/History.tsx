import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { HistoryProps } from "../../../utils/Props";

const History = (props: HistoryProps) => {
  return (
    <CssBaseline>
      <Container maxWidth="lg">
        <Header />
        <Main {...props} />
      </Container>
      <Footer />
    </CssBaseline>
  );
};

export default History;
