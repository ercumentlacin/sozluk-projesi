import React from "react";
import { Menu, Row, Col } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { StyledHeader } from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledHeader>
      <Row className="gray-10 ">
        <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }}>
          <Menu mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Anasayfa</Link>
            </Menu.Item>
            <Menu.Item key="FavoriteWords" icon={<BookOutlined />}>
              <Link to="/favori-kelimeler">Favori Kelimeler</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              <Link to="/hakkimizda">Hakkımızda</Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/profil">Profil</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Navbar;
