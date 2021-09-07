<template>
    <div>
        <h1 class="text-center">My Skillset</h1>
        <b-row class="mt-5">
            <b-col md=12 sm=6>
                <SkillItem level="5" label="Vue.js">
                    <template>
                        <strong>My favorite Frontend Framework!</strong>
                        <br>
                        Vue 2 | Vue 3 | Nuxt.js
                    </template>
                </SkillItem>
            </b-col>
            <b-col sm=6>
                <SkillItem level="5" label="Django">
                    <template>
                        <strong>My favorite Backend Framework!</strong>
                        <br>
                        Django | Django REST
                    </template>
                </SkillItem>
            </b-col>
            <b-col sm=6>
                <SkillItem level=4 label="Docker">
                    <template>
                        <strong>Make deployment a breeze</strong>
                        <br>
                        Docker | Docker-compose | AWS ECS
                    </template>
                </SkillItem>
            </b-col>
            <b-col md=4 sm=6>
                <SkillItem level="4" label="Python">
                    <template>
                        <strong>My first and favorite language</strong>
                        <br>
                        Matplotlib | Panda
                    </template>
                </SkillItem>
            </b-col>
            <b-col md=4 class="d-none d-md-block">
                <Caroussel/>
            </b-col>
            <b-col md=4 sm=6>
                <SkillItem level="4" label="Javascript">
                    <template>
                        Express.js | ES6
                    </template>
                </SkillItem>
            </b-col>
            <b-col sm=6>
                <SkillItem level="3" label="Databases">
                    <template>
                        <strong>SQL & noSQL</strong>
                        <br>
                        Postgres | MongoDB
                    </template>
                </SkillItem>
            </b-col>
            <b-col sm=6>
                <SkillItem level="3" label="Cloud solutions">
                    <template>
                        <strong>AWS & Firebase</strong>
                        <br>
                        AWS RDS | AWS S3 | AWS ECS | Firebase
                    </template>
                </SkillItem>
            </b-col>
            <b-col md=12 sm=6>
                <SkillItem level="3" label="Version Control">
                    <template>
                        Git
                    </template>
                </SkillItem>
            </b-col>
        </b-row>
    </div>
</template>