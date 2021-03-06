// let height = prompt('Enter your height:');
// let weight = prompt('Enter your weight:');


const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150,
            greaterThan: 0
        }
    },
    gender: {
        presence: true,
    },
    height: {
        presence: true,
        numericality: {
            greaterThan: 0
        }
    },
    weight: {
        presence: true,
        numericality: {
            greaterThan: 0
        }
    },
}


const app = Vue.createApp({
    data() {
        return {
            image: 'images/myProfile.jpg',
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            height: null,
            weight: null,
            errors: null,
            isSuccess: false
        }
    },
    methods: {
        validate() {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    age: this.age,
                    gender: this.gender,
                    height: this.height,
                    weight: this.weight
                },
                constraints)
            if (!this.errors) {
                alert("Your profile is updated successfully.")
                this.isSuccess = true
            }
        }

    },
    computed: {
        BMI() {
            return (this.weight / ((this.height / 100) ** 2)).toFixed(2);
        },
    }

})

app.mount('#app')