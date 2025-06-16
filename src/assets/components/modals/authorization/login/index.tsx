import React from "react";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Fezbook from './../../../../icons/facebook.svg'
import Google from './../../../../icons/google.svg'
import { Loader } from "lucide-react";
import { useLoginMutation } from "../../../../../hooks/usequery/usequeryaction";

const Login: React.FC = () => {
  const login = (e:{email:string;password:string})=>{
    mutate(e);
  }
const { mutate, isPending } = useLoginMutation();
  const [form] = Form.useForm();

  return (
    <div className="mt-5 px-5">
      <h2 className="text-center mb-5 text-gray-700 font-medium">
        Enter your username and password to login.
      </h2>

      <Form onFinish={login} form={form} layout="vertical" className="space-y-3">
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Email kiriting!" }]}
        >
          <Input
            placeholder="almamun_uxui@outlook.com"
            size="large"
            className="focus:!border-[#46A358] focus:!ring-[#46A358] hover:!border-[#46A358]"
          />
        </Form.Item>

        <Form.Item
          name="password"
            rules={[
    { required: true, message: "Parolingizni kiriting!" },
    { min: 6, message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak!" },
  ]}
        >
          <Input.Password
            placeholder="**********"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            className="focus:!border-[#46A358] focus:!ring-[#46A358] hover:!border-[#46A358]"
          />
        </Form.Item>

        <div className="text-right text-green-500 cursor-pointer hover:underline text-sm mb-2">
          Forgot Password?
        </div>

        <Form.Item >
          <Button 
            type="primary"
            htmlType="submit"
            className="w-full bg-[#46A358] hover:bg-[#3d914a]"
            size="large"
          >
            {isPending ? <Loader className="animate-spin"/>:"Login"}
          </Button>
        </Form.Item>
      </Form>

      <div className="flex items-center justify-center my-5 gap-2 text-gray-400 text-sm">
        <span className="flex-1 h-[1px] bg-gray-300" />
        <span>Or login with</span>
        <span className="flex-1 h-[1px] bg-gray-300" />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          icon={<img src={Google} alt="google" className="w-5 h-5" />}
          className="w-full border-gray-300"
          size="large"
        >
          Login with Google
        </Button>

        <Button
          icon={<img src={Fezbook} alt="facebook" className="w-5 h-5" />}
          className="w-full border-gray-300 text-blue-600"
          size="large"
        >
          Login with Facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
