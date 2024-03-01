import React from "react";
import { useSelector } from "react-redux";
import { selectData as homeData } from "../services/homeSlice";
import { selectData, selectError, selectIsLoading } from "../services/allProjectsSlice";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
import StyledCard from "../components/styledCard";
// Components
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";

const StyledAboutMe = styled.section`

margin-bottom: 10rem;
p {
  font-size: 1.25rem;
}
.img {
  width: 18rem;
  height: 18rem;
}
`;

const Title = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-family: "Permanent Marker";
  text-align: center;
`;




export default function AllProjects() {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [pageItems, setPageItems] = React.useState([]) as any;
  const [activePage, setActivePage] = React.useState(1);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const { name } = useSelector(homeData);

  React.useEffect(
    function () {
      document.title = `${name} | All Projects`;
    },
    [name]
  );

  React.useEffect(
    function () {
      if (searchInput !== "") {

          const filteredData = data.length > 0 ? data.filter((item:any) => {
           
            if (typeof item === 'object' && item !== null && 'name' in item) {
                return item.name.toLowerCase().includes(searchInput.toLowerCase());
            }
            return false;
        }) : [];
        const tempPageItems = [];
        for (
          let number = 1;
          number <= Math.ceil(filteredData.length / 6);
          number++
        ) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(filteredData.slice(0, 6));
        } else {
          setFilteredResults(
            filteredData.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      } else {
        const tempPageItems = [];
        for (let number = 1; number <= Math.ceil(data.length / 6); number++) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(data.slice(0, 6));
        } else {
          setFilteredResults(
            data.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      }
    },
    [searchInput, data, pageItems.length, activePage]
  );

  React.useEffect(
    function () {
      // Anytime the search input changes set the active page back to 1
      setActivePage(1);
    },
    [searchInput]
  );

  if (isLoading) {
    return (
      <>
      Loading
      </>
    );
  } else if (error) {
    return (
      <>
        Error
      </>
    );
  } else {
    return (
      <>
        <StyledAboutMe>

            <Title>
              <h2 className="text-center">Tous les projets</h2>
              <div className="underline"></div>            
            </Title>
            <Container>
              <InputGroup className="mx-auto mb-3">
                <InputGroup.Text id="search">
                  <Icon icon="ic:round-search" />
                </InputGroup.Text>
                <FormControl
                  placeholder="Project name"
                  aria-label="Search projects"
                  aria-describedby="search"
                  onChange={(e) => setSearchInput(e.currentTarget.value)}
                />
              </InputGroup>
              <Row
                xs={1}
                md={2}
                lg={3}
                className="g-4 justify-content-center row"
              >
                {searchInput.length > 0
                  ? filteredResults.map(function ({
                      id,
                      image,
                      name,
                      description,
                      html_url,
                      homepage,
                    }) {
                      return (
                        <Col key={id}>
                          <StyledCard 
                            image={image}
                            name={name}
                            description={description}
                            url={html_url}
                            demo={homepage}
                          /> 
                        </Col>
                      );
                    })
                  : filteredResults.map(function ({
                      id,
                      image,
                      name,
                      description,
                      html_url,
                      homepage,
                    }) {
                      return (
                        <Col key={id}>
                          <StyledCard
                            image={image}
                            name={name}
                            description={description}
                            url={html_url}
                            demo={homepage}
                          />
                        </Col>
                      );
                    })}
              </Row>
              <Container className="d-flex justify-content-center mt-4">
                {pageItems.length <= 2 ? (
                  <Pagination size="lg" className="mb-4">
                    {pageItems}
                  </Pagination>
                ) : (
                  <Pagination className="mb-5">
                    <Pagination.Prev
                      onClick={() =>
                        activePage === 1
                          ? setActivePage(pageItems.length)
                          : setActivePage(activePage - 1)
                      }
                    />
                    {pageItems[0]}
                    <Pagination.Ellipsis />
                    <Pagination.Item active={true}>
                      {activePage}
                    </Pagination.Item>
                    <Pagination.Ellipsis />
                    {pageItems[pageItems.length - 1]}
                    <Pagination.Next
                      onClick={() =>
                        activePage === pageItems.length
                          ? setActivePage(1)
                          : setActivePage(activePage + 1)
                      }
                    />
                  </Pagination>
                )}
              </Container>
            </Container>

        </StyledAboutMe>
      </>
    );
  }
}
