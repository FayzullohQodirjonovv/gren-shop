// components/UserDropdown.tsx
import { useState, useEffect } from "react";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [user, setUser] = useState<{ name: string; email: string; phone?: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <Button onClick={() => navigate("/login")}>Login</Button>;
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">👤 {user.name}</Menu.Item>
      <Menu.Item key="2">📞 {user.phone || "Raqam yo'q"}</Menu.Item>
      <Menu.Item key="3">✉️ {user.email}</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" danger onClick={handleLogout}>
        🚪 Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button type="text" className="text-green-700 font-semibold">
        {user.name} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserDropdown;
