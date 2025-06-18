import React from "react";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Fezbook from "./../../../../icons/facebook.svg";
import Google from "./../../../../icons/google.svg";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../../../../hooks/usequery/usequeryaction";
import { Loader } from "lucide-react";

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const { mutate, isPending } = useRegisterMutation();

  const login = (values: any) => {
    const { name, surname, email, password } = values;
    mutate({ name, surname, email, password });
    console.log({ name, surname, email, password });
  };

  return (
    <div className="mt-5 px-5">
      <h2 className="text-center mb-5 text-gray-700 font-medium">
        Enter your email address and password to register.
      </h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={login}
        className="space-y-3"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Ismni kiriting!" }]}
        >
          <Input
            placeholder="name"
            size="large"
            className="focus:!border-[#46A358] focus:!ring-[#46A358] hover:!border-[#46A358]"
          />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[{ required: true, message: "Familiyangizni kiriting!" }]}
        >
          <Input
            placeholder="surname"
            size="large"
            className="focus:!border-[#46A358] focus:!ring-[#46A358] hover:!border-[#46A358]"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Email kiriting!" },
            { type: "email", message: "Email noto‘g‘ri!" },
          ]}
        >
          <Input
            placeholder="example@gmail.com"
            size="large"
            className="focus:!border-[#46A358] focus:!ring-[#46A358] hover:!border-[#46A358]"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Parolni kiriting!" }]}
          hasFeedback
        >
          <Input.Password
            placeholder="password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            className="focus:!border-[#46A358] focus:!ring-[#46A358] hover:!border-[#46A358]"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Parolni tasdiqlang!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                toast.error("Parollar mos emas!", {
                  position: "top-right",
                });

                return Promise.reject(new Error("Parollar mos emas!"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="confirm password"
            size="large"
            iconRender={() => null}
            className="focus:!border-[#46A358] focus:!ring-[#46A358] hover:!border-[#46A358]"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-[#46A358] hover:bg-[#3d914a]"
            size="large"
          >
            {isPending ? <Loader className="animate-spin" /> : "Register"}
          </Button>
        </Form.Item>
      </Form>

      <div className="flex items-center justify-center my-5 gap-2 text-gray-400 text-sm">
        <span className="flex-1 h-[1px] bg-gray-300" />
        <span>Or register with</span>
        <span className="flex-1 h-[1px] bg-gray-300" />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          icon={<img src={Google} alt="google" className="w-5 h-5" />}
          className="w-full border-gray-300"
          size="large"
        >
          Register with Google
        </Button>

        <Button
          icon={<img src={Fezbook} alt="facebook" className="w-5 h-5" />}
          className="w-full border-gray-300 text-blue-600"
          size="large"
        >
          Register with Facebook
        </Button>
      </div>
    </div>
  );
};

export default Register;
