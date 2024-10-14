const person ={
    name: 'Praveen kumar',
    job: 'Software Engineer',
    address: {
        line1: 'No 47 1st floor 11th cross ',
        taluk: 'Yelahanka',
        city: 'Bengaluru',
        country: 'India',
    },
    profiles: ['Twitter', 'LinkedIn', 'Instagram'],
    printProfile: () =>{
        person.profiles.map(
            (profiles) =>{
                console.log(profiles)
            }
        )
    }
}

// function printProfile(){
//     console.log(person.profiles[0])
// }

export default function LearningJavaScript(){

    return (
        <div>
            <div>{person.name}</div>
            <div>{person.job}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.taluk}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>

        </div>
    )
}