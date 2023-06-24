import { Button, Card, Grid, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CreateDetails = () => {
  const [details, setDetails] = useState([
    {
      userName: "",
      age: "",
      dob: "",
      fatherName: "",
      motherName: "",
      city: "",
      state: "",
      country: "",
    },
  ]);

  const handleSubmit = () => {
    setDetails({
      ...details,
    });
  };
  console.log(details);
  const [view, setView] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card style={{ transform: "translateX(30%)", width: "60%" }}>
        {!view ? (
          <>
            <Typography textAlign={"center"}>Create Details</Typography>
            <br />
            <Grid container spacing={2}>
              <Grid item xl={4} p={2}>
                <TextField
                  label={"UserName"}
                  size="small"
                  value={details.userName}
                  onChange={(e) =>
                    setDetails({ ...details, userName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={4}>
                <TextField
                  label={"Age"}
                  size="small"
                  value={details.age}
                  onChange={(e) =>
                    setDetails({ ...details, age: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={4}>
                <TextField
                  label={"DOB"}
                  type="date"
                  value={details.dob}
                  onChange={(e) =>
                    setDetails({ ...details, dob: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={4}>
                <TextField
                  label={"FatherName"}
                  size="small"
                  value={details.fatherName}
                  onChange={(e) =>
                    setDetails({ ...details, fatherName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={4}>
                <TextField
                  label={"MotherName"}
                  size="small"
                  value={details.motherName}
                  onChange={(e) =>
                    setDetails({ ...details, motherName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={4}>
                <TextField
                  label={"City"}
                  size="small"
                  value={details.city}
                  onChange={(e) =>
                    setDetails({ ...details, city: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={4}>
                <TextField
                  label={"State"}
                  size="small"
                  value={details.state}
                  onChange={(e) =>
                    setDetails({ ...details, state: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={4}>
                <TextField
                  label={"Country"}
                  size="small"
                  value={details.country}
                  onChange={(e) =>
                    setDetails({ ...details, country: e.target.value })
                  }
                />
              </Grid>
              <Grid item xl={5} />
              <Grid item xl={3}>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleSubmit();
                    setView(true);
                  }}
                  disabled={
                    !details.userName ||
                    !details.state ||
                    !details.motherName ||
                    !details.fatherName ||
                    !details.dob ||
                    !details.country ||
                    !details.city ||
                    !details.age
                  }
                >
                  submit
                </Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Button variant="contained" onClick={() => setView(false)}>
              Back
            </Button>
            <div>
              <Typography sx={{ color: "red" }}>
                UserName:{details.userName}
              </Typography>

              <Typography>Age:{details.age}</Typography>

              <Typography>DOB:{details.dob}</Typography>

              <Typography>FatherName:{details.fatherName}</Typography>

              <Typography>MotherName:{details.motherName}</Typography>

              <Typography>City:{details.city}</Typography>

              <Typography>State:{details.state}</Typography>

              <Typography>Country:{details.country}</Typography>

              <Button variant="contained" onClick={() => setOpenModal(true)}>
                Edit
              </Button>
              <Button variant="contained">Delete</Button>

              {openModal && (
                <>
                  <div>
                    <Modal
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          Modal heading
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </Card>
    </>
  );
};

export default CreateDetails;
