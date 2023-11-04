import React, { useEffect, useState } from "react";




const FormBuilder = () => {
  const [formData, setFormData] = useState({
    questions: [],
    otherInputs: [],
  });

  useEffect(()=>{
   console.log(formData)
  },[formData])


  const addQuest = () => {};
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

  const renderOtherInput = (type, index) => {
    switch (type) {
      case "short-answer":
        return (
          <input
            type="text"
            placeholder="Short Answer"
            value={formData.otherInputs[index].content} //same as e.target.value
            onChange={(e) => {
              const updatedOtherInputs = [...formData.otherInputs];
              updatedOtherInputs[index].content = e.target.value;
              setFormData({ ...formData, otherInputs: updatedOtherInputs });
            }}
          />
        );
      case "paragraph":
        return (
          <textarea
            placeholder="Paragraph"
            value={formData.otherInputs[index].content}
            onChange={(e) => {
              const updatedOtherInputs = [...formData.otherInputs];
              updatedOtherInputs[index].content = e.target.value;
              setFormData({ ...formData, otherInputs: updatedOtherInputs });
            }}
          />
        );
      case "checkbox":
        return (
          <div>
            <label>Checkbox Options:</label>
            {formData.otherInputs[index].options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="checkbox"
                  checked={option.selected}
                  onChange={(e) => {
                    const updatedOtherInputs = [...formData.otherInputs];
                    updatedOtherInputs[index].options[optionIndex].selected =
                      e.target.checked;
                    setFormData({
                      ...formData,
                      otherInputs: updatedOtherInputs,
                    });
                  }}
                />
                <input
                  type="text"
                  placeholder="Option"
                  value={option.label}
                  onChange={(e) => {
                    const updatedOtherInputs = [...formData.otherInputs];
                    updatedOtherInputs[index].options[optionIndex].label =
                      e.target.value;
                    setFormData({
                      ...formData,
                      otherInputs: updatedOtherInputs,
                    });
                  }}
                />
                <button
                  onClick={(e) => {
                    const updatedOtherInputs = [...formData.otherInputs];
                    updatedOtherInputs[index].options = updatedOtherInputs[
                      index
                    ].options.filter((_, i) => i !== optionIndex);
                    setFormData({
                      ...formData,
                      otherInputs: updatedOtherInputs,
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
            <span
              onClick={() => {
                const updatedOtherInputs = [...formData.otherInputs];
                updatedOtherInputs[index].options.push({
                  type: "checkbox",
                  label: "",
                  selected: false,
                });
                setFormData({ ...formData, otherInputs: updatedOtherInputs });
              }}
            >
              Add Option
            </span>
          </div>
        );
      case "radio":
        return (
          <div>
            <label>Radio Options:</label>
            {formData.otherInputs[index].options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={`radio-group-${index}`}
                  checked={option.selected}
                  onChange={(e) => {
                    const updatedOtherInputs = [...formData.otherInputs];
                    updatedOtherInputs[index].options[optionIndex].selected =
                      e.target.checked;
                    setFormData({
                      ...formData,
                      otherInputs: updatedOtherInputs,
                    });
                  }}
                />
                <input
                  type="text"
                  placeholder="Option"
                  value={option.label}
                  onChange={(e) => {
                    const updatedOtherInputs = [...formData.otherInputs];
                    updatedOtherInputs[index].options[optionIndex].label =
                      e.target.value;
                    setFormData({
                      ...formData,
                      otherInputs: updatedOtherInputs,
                    });
                  }}
                />
                <button
                  onClick={(e) => {
                    const updatedOtherInputs = [...formData.otherInputs];
                    updatedOtherInputs[index].options = updatedOtherInputs[
                      index
                    ].options.filter((_, i) => i !== optionIndex);
                    setFormData({
                      ...formData,
                      otherInputs: updatedOtherInputs,
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
            <span
              onClick={() => {
                const updatedOtherInputs = [...formData.otherInputs];
                updatedOtherInputs[index].options.push({
                  type: "radio",
                  label: "",
                  selected: false,
                });
                setFormData({ ...formData, otherInputs: updatedOtherInputs });
              }}
            >
              Add Option
            </span>
          </div>
        );
      case "date":
        return (
          <div>
            <input type="date" value={formData.otherInputs[index].content}
            onChange={(e)=>{
              const updatedOtherInputs=[...formData.otherInputs]
              updatedOtherInputs[index].content=e.target.value
              setFormData({...formData,otherInputs:updatedOtherInputs})
            }}
            />
          </div>
        );
      case "time":
        return(
          <div>
            <input type="time" 
            onChange={(e)=>{
              const updatedOtherInputs=[...formData.otherInputs]
              updatedOtherInputs[index].content=e.target.value
              setFormData({...formData,otherInputs:updatedOtherInputs})
            }}
            />
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <button onClick={addQuest}>+</button>
      <button onClick={addQuestion}>Tt</button>
      {formData.questions.map((question, index) => {
        return (
          <div key={index}>
            <button
              onClick={(e) => {
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
              X
            </button>
            <div className="question">
              <input
                type="text"
                value={question.content}
                onChange={(e) => {
                  const updatedQuestions = [...formData.questions];
                  updatedQuestions[index].content = e.target.value;
                  setFormData({ ...formData, questions: updatedQuestions });
                }}
              />
            </div>
            <br />
            <div className="otherInput">
              <label htmlFor={`text-type-${index}`}>Answer</label>
              <select
                name={`text-type-${index}`}
                id={`text-type-${index}`}
                value={formData.otherInputs[index].type}
                onChange={(e) => {
                  const selectedType = e.target.value;
                  const updatedOtherInputs = [...formData.otherInputs];
                  updatedOtherInputs[index].type = selectedType;
                  setFormData({ ...formData, otherInputs: updatedOtherInputs });
                }}
              >
                <option value="short-answer">Short Answer</option>
                <option value="paragraph">Paragraph</option>
                <option value="checkbox">Checkboxes</option>
                <option value="radio">Single Value</option>
                <option value="date">Date</option>
                <option value="time">Time</option>
              </select>
              {renderOtherInput(formData.otherInputs[index].type, index)}
            </div>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FormBuilder;
