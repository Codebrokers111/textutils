import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let nword = word.toLowerCase();
        return nword.charAt(0).toUpperCase() + nword.slice(1);
    }
if(props.alert != null){
  return (
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    </div>
  )
}
}
