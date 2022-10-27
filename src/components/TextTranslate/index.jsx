import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getWord from "../../store/action";

const TextTranslate = () => {
  const [text, setText] = useState("");
  const [option, setOption] = useState("");
  const [option2, setOption2] = useState("");
  const [result, setResult] = useState("");

  const history = useSelector((state) => state);
  console.log("state", history);
  const dispatch = useDispatch();

  const addText = (e) => {
    setText(e.target.value);
  };

  const changeSelect = (e) => {
    setOption(e.target.value);
  };

  const changeSelect2 = (e) => {
    setOption2(e.target.value);
  };

  const translate = async() => {
    await axios
      .get(
        `https://api.mymemory.translated.net/get?q=${text}&langpair=${option}|${option2}`
      )
      .then((response) => {
        // dispatch(getWord(response.data.responseData.translatedText, text, option, option2))
        console.log(response.data.responseData.translatedText);
        setResult(response.data.responseData.translatedText);
       
        dispatch(getWord(response.data.responseData.translatedText, text, option, option2))
      });
      //console.log("result", result);
      //dispatch(getWord(result, text, option, option2))
  };
  return (
    <>
      <h1>React Translate App</h1>
      <div className="mb-3">
        <select
          onChange={changeSelect}
          className="form-select"
          aria-label="Default select example"
          value={option}
        >
          <option selected>Select Language</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
          <option value="de">Deutch</option>
        </select>
      </div>
      <div className="mb-3">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Enter text to translate{" "}
          </label>
          <textarea
            onChange={addText}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          >
            {text}
          </textarea>
        </div>
      </div>
      <button type="button" onClick={translate} class="btn btn-primary mb-4">
        Translate
      </button>

      <div className="mb-3">
        <select
          value={option2}
          onChange={changeSelect2}
          className="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Language</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
          <option value="de">Deutch</option>
        </select>
      </div>
      <div className="mb-3">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Total result Text
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={result}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default TextTranslate;
