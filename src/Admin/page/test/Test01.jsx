import { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const MyComponent = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        // Xử lý dữ liệu từ form và trả về object
        console.log('Form values:', values);
        form.resetFields();
        setVisible(false);
      })
      .catch(error => {
        console.error('Validation error:', error);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal
        title="Add Item"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          {/* Add more form fields here */}
        </Form>
      </Modal>
    </div>
  );
};

export default MyComponent;
