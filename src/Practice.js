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

    const ages = [21, 18, 42, 40, 64, 63, 34]

    const maxAge = ages.reduce((max, age) => {
        // console.log(`${age} > ${max} = ${age > max}`)
        if (age > max) {
            return age
        } else {
            return max
        }
    }, 0)

    const colors = [
        {
            id: 'xekare',
            title: '과격한빨강',
            rating: 3
        },
        {
            id: 'jbwsof',
            title: '큰 파랑',
            rating: 2
        },
        {
            id: 'pringbj',
            title: '회색곰 회색',
            rating: 5
        }
    ]

    const hashColors = colors.reduce(
        (hash, {id, title, rating}) => {
            hash[id] = {title, rating}
            return hash
        }
    , {})

    const color = ['red', 'red', 'green', 'blue', 'green']

    const uniqueColors = color.reduce(
        (unique, color) =>
            unique.indexOf(color) !== -1 ? unique : [...unique, color], []
    )

    console.log(uniqueColors)

    return <></>
}

export default Practice;