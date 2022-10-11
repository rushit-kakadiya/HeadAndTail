import React, { Fragment, useCallback, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const HeadAndTail = () => {
    const [inputValue, setInputValue] = useState('');
    const [values, setValues] = useState([['H', 'T'], ['H']]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!inputValue) return setInputValue(undefined);

        if (!values.length) return setValues([[inputValue]]);

        let tempindex = "";
        for (let i = 0; i < values.length; i++) {
            let temp = values[i];
            let temp1 = temp[temp.length - 1];
            let temp2 = temp.length;
            let emptyVal;

            if (temp1 === 'T' && inputValue === 'H') {
                if (tempindex === "") {
                    temp.push(inputValue)
                    break
                } else {
                    while (temp2 !== tempindex) {
                        temp.push(' ')
                        temp2 = temp.length
                    }
                    temp.push(inputValue)
                    break
                }
            }
            else if (temp1 === 'H' && inputValue === 'T') {
                if (tempindex === "") {
                    temp.push(inputValue)
                    break
                } else {
                    while (temp2 !== tempindex) {
                        temp.push(' ')
                        temp2 = temp.length
                    }
                    temp.push(inputValue)
                    break
                }
            }
            else if ((temp1 === 'H' || temp1 === 'T') && inputValue === 'H') {
                emptyVal = temp.includes(undefined)
                if (!emptyVal && tempindex === "") {
                    tempindex = temp.lastIndexOf('H')
                    continue
                } else {
                    if (temp2 < tempindex) {
                        while (temp2 < tempindex) {
                            temp.push(' ')
                            temp2 = temp.length
                        }
                        temp.push(inputValue)
                        break
                    } else {
                        if (i === values.length - 1) {
                            values.push([inputValue])
                            break
                        }
                        continue
                    }
                }
            }
            else if ((temp1 === 'T' || temp1 === 'H') && inputValue === 'T') {
                emptyVal = temp.includes(undefined)
                if (!emptyVal && tempindex === "") {
                    tempindex = temp.lastIndexOf('T')
                    continue
                } else {
                    if (temp2 < tempindex) {
                        while (temp2 < tempindex) {
                            temp.push(' ')
                            temp2 = temp.length
                        }
                        temp.push(inputValue)
                        break
                    } else {
                        if (i === values.length - 1) {
                            values.push([inputValue])
                            break
                        }
                        continue
                    }
                }
            }
        }

        setInputValue('');
        return setValues([...values]);
    }, [inputValue, values]);

    return (
        <Fragment>
            <h1 className='App my-3'>Head {'&'} Tail</h1>
            <div className='introduction'>
                <Form className='d-flex mb-5'>
                    <div className='mx-5'>
                        <Form.Group>
                            <Form.Select
                                aria-label="select value"
                                onChange={e => setInputValue(e.target.value)}
                                value={inputValue}
                                isInvalid={inputValue === undefined ? true : false}
                            >
                                <option>Select Value</option>
                                <option value="H">Head</option>
                                <option value="T">Tail</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please select value from dropdown.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div>
                        <Button className='px-5' variant='primary' type='submit' onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </Form>
                {values?.length > 0 && <table>
                    <thead>
                        <tr>
                            {values.map((_, i) => <th key={i + 'th'}></th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((el, idx) => <tr key={idx + 'tr'}>
                            {el?.length > 0 ?
                                el.map((e, i) => <td key={i + 'td'}>{e}</td>)
                                : <td key={idx + 'td'}>{el}</td>}
                        </tr>
                        )}
                    </tbody>
                </table>}
            </div>
        </Fragment>
    )
}

export default HeadAndTail;