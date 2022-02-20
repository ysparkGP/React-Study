import React from 'react'
import PropTypes from 'prop-types';

function PropComponent(props){
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name: "Tom",
    age: 8,
}
// 개발 모드에서만 동작
// RegExpression으로 사용자 정의 가능
// 원래 제약없던 children까지 제한 가능
PropComponent.propTypes = {
    name: PropTypes.string,
    age: function(props, propName, componentName) {
        if (!/(7|10)/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      },
}

export default function Component() {
  return (
    <div>
        <PropComponent/>
    </div>
  )
}
