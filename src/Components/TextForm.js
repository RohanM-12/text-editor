// import React   from 'react'
 import React , {useState} from 'react'
export default function TextForm(props) {

  //  text is a global string and settext iis function to change the text
  const [text, setText] = useState("");

  const hadleUpClick = () => {
    let str = text.toUpperCase();
    setText(str);
    props.showAlert("Converted to Uppercase","Success");
  }

  const handleDownClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","Success");

  }
  const handleOnChange = (Event) => {

    setText(Event.target.value);
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("TextBox Cleared","Success");
  }

  const handleTitleClick = () => {
    setText(text.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase() }));
    
    props.showAlert("Converted to Title-case","Success");

  }

  const handleCopyClick = () => {
    var temp = document.getElementById("mybox");
    temp.select();
    navigator.clipboard.writeText(temp.value);

    props.showAlert("Copied to Clipboard","Success");
  }

  const handleRmvSpcClick = () => {
    let temp = text.split(/[ ]+/);
    setText(temp.join(" "));
    props.showAlert("Spaces removed","Success");
  }

  return (
    <>

      <div className='container' style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label"></label>
          <textarea style={{backgroundColor:props.mode==='dark' ? 'grey':'white' ,color:props.mode==='dark' ? 'white':'black' } } className="form-control" id="mybox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>

        {/* <div className="container-fluid"> */}
        {/* <div className="row"> */}
        <button className="btn btn-primary mx-2" onClick={hadleUpClick} >Convert to Upper-case</button>
        <button className="btn btn-primary  mx-2" onClick={handleDownClick}>Convert to Lower-case</button>
        <button className="btn btn-primary  mx-2" onClick={handleTitleClick}>Title Case</button>
        <button className="btn btn-primary  mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary  mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary  mx-2" onClick={handleRmvSpcClick}>Remove Extra Spaces</button>

        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="container my-4" style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.trim().length} </b> characters</p>
        <p><b>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} </b> words</p>
        <p>Around <b>{0.008 * text.split(" ").length}</b> Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview here.."}</p>

      </div> 


</>



  )
}

