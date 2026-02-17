import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberChecked, setIsNumberChecked] = useState(false);
  const [isCharChecked, setIsCharChecked] = useState(false);
  const [password, setPassword] = useState("");

  const copypasswordRef = useRef(null);

  const copypassword = useCallback(() => {
    copypasswordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberChecked) str += "0987654321";
    if (isCharChecked) str += "!@#$%^&*()_+=-[]{}:?></.,;`~";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pw += str.charAt(char);
    }

    setPassword(pw);
  }, [length, isNumberChecked, isCharChecked, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberChecked, isCharChecked, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            ref={copypasswordRef}
            type="text"
            readOnly
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copypassword}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumberChecked}
              id="numberInput"
              onChange={(e) => setIsNumberChecked(e.target.checked)}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              defaultChecked={isCharChecked}
              id="charInput"
              onChange={(e) => setIsCharChecked(e.target.checked)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
