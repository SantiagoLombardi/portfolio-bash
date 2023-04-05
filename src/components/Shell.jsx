import React, { useState } from 'react';
import StartMessage from './StartMessage';
import CommandHistory from './CommandHistory';

const Shell = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const outputValueNull = 'Hi, enter a command here below, type "help" to see availables commands'
  const [placeholder, setPlaceholder] = useState("Type your command here to begin...")
	const [outputColor, setOutputColor] = useState("text-blue-100")
  const [commandHistory, setCommandHistory] = useState();

  const handleInput = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleCommand = () => {
    const command = inputValue.trim();
    const commandsList = ["help", "cd", "ls", "link instagram", "link linkedin", "link email", "link github", "cd about", "cd education", "cd skills", "cd contact", "social"];

    if (command === "") {
      return;
    } else if (commandsList.indexOf(command) === -1) {
			setOutputColor("text-red-500")
      setOutputValue(`ERROR: ${command} is not a command`);
      setPlaceholder(`Type help to see the commands availables`)
    } else if (command === "help") {
			setOutputColor("text-blue-100")
      setOutputValue(`cd - Navigate to a section, ls - List available sections, help - Show the availables commands, link - open a social media profile in a new tab, social - List available social media's`);
      setPlaceholder(`Type your command here to begin...`)
    } else if (command === "ls") {
			setOutputColor("text-blue-100")
      setOutputValue("sections: about, education,  skills,  contact");
      setPlaceholder(`Use "cd [section]" to navigate`)
    } else if (command === "social") {
			setOutputColor("text-blue-100")
      setOutputValue("options: github, linkedin, mail, instagram");
      setPlaceholder(`Use "link [option]" to open in a new ...`)
    }else if (command === "cd") {
			setOutputColor("text-yellow-300")
      setOutputValue("please, to navigate select a section, to see availables sections type ls");
      setPlaceholder(`Try "cd [section]", or try "ls to see the section list"`)
    }else if (command === "cd about") {
			setOutputColor("text-blue-400")
      setOutputValue("About Me: I'm a young tech enthusiast who's currently pursuing both a degree in Computer Science and a teaching degree in the same field at Universidad Nacional de Rio Cuarto. Besides coding, I have a great passion for music and love to produce and compose my own pieces. Spending time with my friends is also important to me, and I enjoy going out and trying new things together. In my free time, I like to explore new outdoor activities and pursue my interests in tech and music. I've also taken courses on web development, JavaScript, and React on the Coderhouse platform, which has helped me build a strong foundation in these areas.");
      setPlaceholder(`Type your command here...`)
    }else if (command === "cd skills") {
			setOutputColor("text-blue-400")
      setOutputValue("My skills: As an aspiring software developer, I prioritize continuous learning to improve my skills and stay updated with new tools and technologies. I possess strong skills in both front-end and back-end development and have a deep understanding of the importance of following best practices to ensure that my software is robust and reliable. I have a good sense of aesthetics, which allows me to design visually pleasing interfaces for my applications. In addition, I have excellent communication skills, which enable me to work effectively with clients and team members. My experience with algorithm analysis and design, along with my proficiency in mathematics, enables me to create efficient and optimized solutions. I constantly seek to expand my knowledge of new tools and technologies to bring my dream projects closer to reality.");
      setPlaceholder(`Type your command here...`)
    }else if (command === "cd education") {
			setOutputColor("text-blue-400")
      setOutputValue("My education: I completed my secondary education with a Bachelor's in Communication Sciences at the Juan Pascual Pringles Institute in Vicuña Mackenna. Currently, I'm pursuing both the Licenciatura and Profesorado programs in Computer Science at Universidad Nacional de Rio Cuarto. The Licenciatura is a university degree that focuses on deepening theoretical and practical knowledge in a specific area, in this case, in the field of computer science. On the other hand, the Profesorado is a teaching training program that will allow me to acquire skills and competencies to teach at the secondary and tertiary levels in the area of computer science. \n In addition to staying current with the latest developments in the field by regularly reading technology news and industry reports, I've also taken courses in web development, JavaScript, and React on the Coderhouse platform. Currently, I'm also taking a backend programming course on Coderhouse. While these courses have provided valuable supplementary knowledge, I find that my formal university education is the cornerstone of my technical expertise.");
      setPlaceholder(`Type your command here...`)
    } else if (command === "link instagram") {
      setOutputColor("text-green-500")
      setOutputValue(`Opening my instagram in a new tab`);
      setPlaceholder(`Type your command here...`)
      window.open("https://www.instagram.com/santiagolombardi_", "_blank");
    } else if (command === "link github") {
      setOutputColor("text-green-500")
      setOutputValue(`Opening my instagram in a new tab`);
      setPlaceholder(`Type your command here...`)
      window.open("https://www.github.com/SantiagoLombardi", "_blank");
    }else {
			setOutputColor("text-yellow-500")
      setOutputValue(`the command "${command}" is still in development, please try again lately`);
      setPlaceholder(`Please try with another command to continue`)
    }
    setInputValue("");
    setCommandHistory( outputValue);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleCommand();
    }
  };



  const outputPre = "> ";
  return (
    <div className='overflow-scroll max-h-[40ch]'>
      <div className='flex flex-col'style={{display: 'flex', flexDirection: 'column !important'}}>
        { outputValue? null : <StartMessage/> }
        <CommandHistory history={commandHistory} />
        <div className='flex flex-row' style={{display: 'flex', flexDirection: 'row'}}>
          {outputPre}
          <div className='ml-2 ' style={{marginLeft: '8px'}}>
            <p className={outputColor} >{outputValue? outputValue : outputValueNull}</p> 
          </div>
        </div>	
      </div>
      <div style={{display: 'flex'}}>
				<pre className="prompt" style={ {display: 'inline-block'} } >$</pre>
        <input type="text" value={inputValue} onChange={handleInput} onKeyDown={handleKeyDown} autoFocus style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: '1rem', lineHeight: '1.5', fontWeight: '400', display: 'inline-block'}} placeholder={placeholder} className="ml-2"/>
      </div>
    </div>
  );
};

export default Shell;
