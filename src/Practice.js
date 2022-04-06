import React from 'react';

function Practice() {
    const schools = ['Yorktown', 'Washington & Lee', 'Wakefield']
    const wSchools = schools.filter(school => school[0] === 'W')
    const cutSchool = (cut, list) => list.filter(school => school !== cut)
    const highSchools = schools.map(school => `${school} High School`)
    const highSchools2 = schools.map(school => ({name: school}))

    let school2 = [
        {name: 'Yorktown'},
        {name: 'Stratford'},
        {name: 'Washington & Lee'},
        {name: 'WakeField'}
    ]

    /*
    const editName = (oldName, name, arr) =>
        arr.map(item => {
            if (item.name === oldName) {
                return {
                    ...item,
                    name
                }
            } else {
                return item
            }
        })
    */

    const editName = (oldName, name, arr) => arr.map(item => item.name === oldName ? { ...item, name } : item)

    const editNth = (n, name, arr) => arr.map((item, i) => (i ===n ? { ...item, name} : item ))

    let updateSchool = editName('Stratford', 'HB Woodlawn', school2)
    let updateSchool2 = editNth(2, 'Mansfield', school2)

    const schools3 = {
        'Yorktown' : 10,
        'Washington & lee' : 2,
        'Wakefield' : 5
    }

    const schoolArray = Object.keys(schools3).map(key => ({
        name: key,
        wins: schools3[key]
    }))

    console.log(Object.keys(schools3))
    console.log(schoolArray)

    return <></>
}

export default Practice;