import React from "react";
import styled from "styled-components";

const TitleLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  vertical-align: middle;
  font-weight: bold;
  text-align: center;
`;
const Layout = styled.div`
 padding: 8px;
`;
const TitleContent = ({children}) => (
    <Layout>
      <TitleLayout>
        {children}
      </TitleLayout>
    </Layout>
);

export default TitleContent;