
import React from 'react';


//* At least 8 characters in length\n* Contain at least 3 of the following 4 types of characters:\n * lower case letters (a-z)\n * upper case letters (A-Z)\n * numbers (i.e. 0-9)\n * special characters (e.g. !@#$%^&*)\n* No more than 2 identical characters in a row (e.g., \"aaa\" not allowed)

const MustContainItem = props => {
    const { data } = props
    const label = data[0]
    const meetsReq = data[1]

    const setClass = () => {
        const classArr = ["must-item"]
        if (meetsReq) classArr.push('cross-out')
        return classArr.join(' ')
    }

    return (
        <>
            <div className={setClass()}>
                <li className="must-text">{label}</li>
            </div>
        </>
  );
}

export default MustContainItem;
