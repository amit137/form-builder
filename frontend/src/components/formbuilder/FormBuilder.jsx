import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Radio,
  FormControlLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const FormBuilder = () => {
  const [formData, setFormData] = useState({
    questions: [],
    otherInputs: [],
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const addQuestion = () => {
    const newQuestion = {
      type: "text",
      content: "Quest(Title Desc)",
    };
    const newOtherInput = {
      type: "text",
      content: "write something",
      options: [],
    };
    setFormData({
      ...formData,
      questions: [...formData.questions, newQuestion],
      otherInputs: [...formData.otherInputs, newOtherInput],
    });
  };

  const handleQuestionChange = (event, index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index].content = event.target.value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleAnswerTypeChange = (event, index) => {
    const selectedType = event.target.value;
    const updatedOtherInputs = [...formData.otherInputs];
    updatedOtherInputs[index].type = selectedType;
    setFormData({ ...formData, otherInputs: updatedOtherInputs });
  };

  const handleOptionLabelChange = (event, index, optionIndex) => {
    const updatedOtherInputs = [...formData.otherInputs];
    updatedOtherInputs[index].options[optionIndex].label = event.target.value;
    setFormData({ ...formData, otherInputs: updatedOtherInputs });
  };

  const handleOptionSelectChange = (index, optionIndex) => {
    const updatedOtherInputs = [...formData.otherInputs];
    updatedOtherInputs[index].options[optionIndex].selected =
      !updatedOtherInputs[index].options[optionIndex].selected;
    setFormData({ ...formData, otherInputs: updatedOtherInputs });
  };

  const handleOtherInputChange = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedOtherInputs = [...formData.otherInputs];
    updatedOtherInputs[index][value] = value;
    setFormData({ ...formData, otherInputs: updatedOtherInputs });
  };

  const addOption = (index) => {
    const updatedOtherInputs = [...formData.otherInputs];
    updatedOtherInputs[index].options.push({ label: "", selected: false });
    setFormData({ ...formData, otherInputs: updatedOtherInputs });
  };

  const removeOption = (index, optionIndex) => {
    const updatedOtherInputs = [...formData.otherInputs];
    updatedOtherInputs[index].options.splice(optionIndex, 1);
    setFormData({ ...formData, otherInputs: updatedOtherInputs });
  };

  return (
    <div>
      <Typography variant="h4">Form Builder</Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={addQuestion}
      >
        Add Question
      </Button>
      {formData.questions.map((question, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Question"
              variant="outlined"
              value={question.content}
              onChange={(event) => handleQuestionChange(event, index)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Answer Type</InputLabel>
              <Select
                name={`text-type-${index}`}
                id={`text-type-${index}`}
                value={formData.otherInputs[index].type}
                onChange={(event) => handleAnswerTypeChange(event, index)}
              >
                <MenuItem value="short-answer">Short Answer</MenuItem>
                <MenuItem value="paragraph">Paragraph</MenuItem>
                <MenuItem value="checkbox">Checkboxes</MenuItem>
                <MenuItem value="radio">Single Value</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="time">Time</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              {formData.otherInputs[index].type === "short-answer" && (
                <TextField
                  label="Short Answer"
                  variant="outlined"
                  name="content"
                  value={formData.otherInputs[index].content}
                  onChange={(event) => handleOtherInputChange(event, index)}
                />
              )}
              {formData.otherInputs[index].type === "paragraph" && (
                <TextField
                  label="Paragraph"
                  variant="outlined"
                  name="content"
                  multiline
                  rows={4}
                  value={formData.otherInputs[index].content}
                  onChange={(event) => handleOtherInputChange(event, index)}
                />
              )}

              {formData.otherInputs[index].type === "checkbox" && (
                <div>
                  <Typography>Checkbox Options:</Typography>
                  {formData.otherInputs[index].options.map(
                    (option, optionIndex) => (
                      <div key={optionIndex}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={option.selected}
                              onChange={(event) =>
                                handleOptionSelectChange(
                                  index,
                                  optionIndex
                                )
                              }
                              name={`selected-${optionIndex}`}
                            />
                          }
                          label={
                            <TextField
                              variant="outlined"
                              name={`label-${optionIndex}`}
                              value={option.label}
                              onChange={(event) =>
                                handleOptionLabelChange(
                                  event,
                                  index,
                                  optionIndex
                                )
                              }
                            />
                          }
                        />
                        <Button
                          variant="contained"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => removeOption(index, optionIndex)}
                        >
                        </Button>
                      </div>
                    )
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => addOption(index)}
                  >
                    Add Option
                  </Button>
                </div>
              )}

              {formData.otherInputs[index].type === "radio" && (
                <div>
                  <Typography>Radio Options:</Typography>
                  {formData.otherInputs[index].options.map(
                    (option, optionIndex) => (
                      <div key={optionIndex}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={option.selected}
                              onChange={(event) =>
                                handleOptionSelectChange(index,optionIndex)
                              }
                              name={`selected-${optionIndex}`}
                            />
                          }
                          label={
                            <TextField
                              variant="outlined"
                              name={`label-${optionIndex}`}
                              value={option.label}
                              onChange={(event) =>
                                handleOptionLabelChange(event, index,optionIndex)
                              }
                            />
                          }
                        />
                        <Button
                          variant="contained"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => removeOption(index, optionIndex)}
                        >
                          Remove
                        </Button>
                      </div>
                    )
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => addOption(index)}
                  >
                    Add Option
                  </Button>
                </div>
              )}
              {formData.otherInputs[index].type === "date" && (
                <TextField
                  label="Date"
                  variant="outlined"
                  name="content"
                  type="date"
                  value={formData.otherInputs[index].content}
                  onChange={(event) => handleOtherInputChange(event, index)}
                />
              )}
              {formData.otherInputs[index].type === "time" && (
                <TextField
                  label="Time"
                  variant="outlined"
                  name="content"
                  type="time"
                  value={formData.otherInputs[index].content}
                  onChange={(event) => handleOtherInputChange(event, index)}
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => {
                const updatedQuestions = formData.questions.filter(
                  (_, i) => i !== index
                );
                const updatedOtherInputs = formData.otherInputs.filter(
                  (_, i) => i !== index
                );
                setFormData({
                  ...formData,
                  questions: updatedQuestions,
                  otherInputs: updatedOtherInputs,
                });
              }}
            >
              Delete Question
            </Button>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default FormBuilder;
