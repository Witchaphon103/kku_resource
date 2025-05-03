import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea"; // ✅ ใช้ตัวนี้แทน Textarea
import { FileUpload } from "primereact/fileupload";
import { Card } from "primereact/card";

const AdminUploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(null);
  const [category, setCategory] = useState(null);
  const [file, setFile] = useState(null);

  const typeOptions = [
    { label: "รูปภาพ", value: "image" },
    { label: "วิดีโอ", value: "video" },
    { label: "กราฟฟิก", value: "graphic" },
  ];

  const categoryOptions = [
    { label: "การแพทย์", value: "medical" },
    { label: "การเรียนการสอน", value: "education" },
    { label: "รอบรั้วมหาวิทยาลัย", value: "campus" },
  ];

  const handleUpload = () => {
    if (!title || !type || !category || !file) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // ส่งข้อมูลไป backend หรือ Firestore/Firebase
    console.log({ title, description, type, category, file });
    alert("อัปโหลดสำเร็จ");

    setTitle("");
    setDescription("");
    setType(null);
    setCategory(null);
    setFile(null);
  };

  return (
    <div className="p-4">
      <Card title="อัปโหลดทรัพยากรใหม่">
        <div className="p-fluid grid">
          <div className="col-12 mb-3">
            <label>ชื่อไฟล์</label>
            <InputText value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="col-12 mb-3">
            <label>คำอธิบาย</label>
            <InputTextarea
              value={description}
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="col-12 md:col-6 mb-3">
            <label>ประเภท</label>
            <Dropdown
              value={type}
              options={typeOptions}
              onChange={(e) => setType(e.value)}
              placeholder="เลือกประเภท"
            />
          </div>

          <div className="col-12 md:col-6 mb-3">
            <label>หมวดหมู่</label>
            <Dropdown
              value={category}
              options={categoryOptions}
              onChange={(e) => setCategory(e.value)}
              placeholder="เลือกหมวดหมู่"
            />
          </div>

          <div className="col-12 mb-4">
            <label>อัปโหลดไฟล์</label>
            <FileUpload
              name="demo[]"
              customUpload
              uploadHandler={(e) => setFile(e.files[0])}
              auto
              mode="basic"
              accept="image/*,video/*"
              chooseLabel="เลือกไฟล์"
            />
          </div>

          <div className="col-12">
            <Button
              label="อัปโหลด"
              icon="pi pi-upload"
              onClick={handleUpload}
              className="p-button-success"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminUploadPage;
