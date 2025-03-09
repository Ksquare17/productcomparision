import React from "react";
import { Modal } from "antd";
import View from "../view/View";

interface AddMoreModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddMoreModal: React.FC<AddMoreModalProps> = ({ visible, onClose }) => {
  return (
    <Modal 
      title="Select Products to Compare" 
      open={visible} 
      onCancel={onClose} 
      footer={null} 
      width={800}
    >
      <View navigation={false}/>
    </Modal>
  );
};

export default AddMoreModal;
