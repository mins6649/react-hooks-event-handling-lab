// Code Keypad Component Here

function Keypad (){
    function changePassword(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={changePassword}></input>
        </div>
    )
}

export default Keypad;