import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

  categoryCard: {
    backgroundColor: "var(--surface-700)",
    border: "none",
    borderRadius: "0.5rem",
    overflow: "hidden",
    transition: "transform 0.2s, box-shadow 0.2s",
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    },
    "& .p-card-title": {
      color: "var(--surface-0)",
    },
    "& .p-card-content": {
      padding: "0",
    },
    "& .p-card-body": {
      padding: "1rem",
    },
    "& img": {
      width: "100%",
      objectFit: "cover",
    },
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardFooter: {
    marginTop: "auto",
    paddingTop: "1rem",
  }
});

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className="p-2">
      <h2 style={{ color: "#892d05" }}>หมวดหมู่ยอดนิยม</h2>
      <div className="grid">
        <div className="col-12 md:col-4 lg:col-4 p-2">
          <Card className={classes.categoryCard}>
            <div className={classes.cardContent}>
              <img 
                alt="ภาพการแพทย์" 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400' style='background:%236366F1'%3E%3Ctext x='50%25' y='50%25' style='fill:%23FFFFFF;font-size:24px;font-family:Arial;dominant-baseline:middle;text-anchor:middle'%3Eภาพการแพทย์%3C/text%3E%3C/svg%3E"
              />
              <h3>ภาพการแพทย์</h3>
              <p>รวมภาพสำหรับการแพทย์และสาธารณสุข</p>
              <div className={classes.cardFooter}>
                <Button label="เรียกดู" icon="pi pi-arrow-right" className="p-button-outlined" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-12 md:col-4 lg:col-4 p-2">
          <Card className={classes.categoryCard}>
            <div className={classes.cardContent}>
              <img 
                alt="ภาพการเรียนการสอน" 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400' style='background:%236366F1'%3E%3Ctext x='50%25' y='50%25' style='fill:%23FFFFFF;font-size:24px;font-family:Arial;dominant-baseline:middle;text-anchor:middle'%3Eการเรียนการสอน%3C/text%3E%3C/svg%3E"
              />
              <h3>ภาพการเรียนการสอน</h3>
              <p>รวมภาพสำหรับการเรียนการสอนและกิจกรรมการศึกษา</p>
              <div className={classes.cardFooter}>
                <Button label="เรียกดู" icon="pi pi-arrow-right" className="p-button-outlined" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-12 md:col-4 lg:col-4 p-2">
          <Card className={classes.categoryCard}>
            <div className={classes.cardContent}>
              <img 
                alt="ภาพรอบรั้วมหาวิทยาลัย" 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400' style='background:%236366F1'%3E%3Ctext x='50%25' y='50%25' style='fill:%23FFFFFF;font-size:24px;font-family:Arial;dominant-baseline:middle;text-anchor:middle'%3Eรอบรั้ว%3C/text%3E%3C/svg%3E"
              />
              <h3>ภาพรอบรั้วมหาวิทยาลัย</h3>
              <p>ภาพกิจกรรมและสถานที่ต่างๆ ภายในมหาวิทยาลัย</p>
              <div className={classes.cardFooter}>
                <Button label="เรียกดู" icon="pi pi-arrow-right" className="p-button-outlined" />
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <h2 style={{ color: "#892d05" }}>วิดีโอแนะนำ</h2>
      <div className="grid">
        <div className="col-12 md:col-4 lg:col-4 p-2">
          <Card className={classes.categoryCard}>
            <div className={classes.cardContent}>
              <img 
                alt="วิดีโอการแพทย์" 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400' style='background:%236366F1'%3E%3Ctext x='50%25' y='50%25' style='fill:%23FFFFFF;font-size:24px;font-family:Arial;dominant-baseline:middle;text-anchor:middle'%3Eวิดีโอการแพทย์%3C/text%3E%3C/svg%3E"
              />
              <h3>วิดีโอการแพทย์</h3>
              <p>วิดีโอสำหรับการศึกษาทางการแพทย์</p>
              <div className={classes.cardFooter}>
                <Button label="เรียกดู" icon="pi pi-arrow-right" className="p-button-outlined" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-12 md:col-4 lg:col-4 p-2">
          <Card className={classes.categoryCard}>
            <div className={classes.cardContent}>
              <img 
                alt="วิดีโอการเรียนการสอน" 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400' style='background:%236366F1'%3E%3Ctext x='50%25' y='50%25' style='fill:%23FFFFFF;font-size:24px;font-family:Arial;dominant-baseline:middle;text-anchor:middle'%3Eวิดีโอเรียน%3C/text%3E%3C/svg%3E"
              />
              <h3>วิดีโอการเรียนการสอน</h3>
              <p>คลิปการสอนและบรรยายวิชาต่างๆ</p>
              <div className={classes.cardFooter}>
                <Button label="เรียกดู" icon="pi pi-arrow-right" className="p-button-outlined" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-12 md:col-4 lg:col-4 p-2">
          <Card className={classes.categoryCard}>
            <div className={classes.cardContent}>
              <img 
                alt="กราฟฟิก" 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400' style='background:%236366F1'%3E%3Ctext x='50%25' y='50%25' style='fill:%23FFFFFF;font-size:24px;font-family:Arial;dominant-baseline:middle;text-anchor:middle'%3Eกราฟฟิก%3C/text%3E%3C/svg%3E"
              />
              <h3>กราฟฟิก</h3>
              <p>ภาพกราฟฟิกสำหรับสื่อประชาสัมพันธ์</p>
              <Badge value="ใหม่" severity="danger" className="mr-2" />
              <div className={classes.cardFooter}>
                <Button label="เรียกดู" icon="pi pi-arrow-right" className="p-button-outlined" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainPage;