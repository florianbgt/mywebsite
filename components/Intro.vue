<template>
    <div>
        <div class="text-center">
            <nuxt-img class="img-thumbnail rounded-circle" src="Florian-Bigot.jpg" alt="Florian Bigot" width="250px" height="250px"/>
                <h1>Hello, I am <strong class="text-secondary">Florian Bigot</strong></h1>
            <h2>Web Developer</h2>
        </div>
        <table class="mx-auto mt-4">
            <tbody>
                <tr>
                    <td class="text-center">
                        <fa :icon="['fab', 'github']" style="font-size: 30px"/>
                    </td>
                    <td class="pl-2">
                        <big>
                            <a href="https://github.com/florianbgt" target="blank">https://github.com/florianbgt</a>
                        </big>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">
                        <fa :icon="['fab', 'linkedin']" style="font-size: 30px"/>
                    </td>
                    <td class="pl-2">
                        <big>
                            <a href="https://linkedin.com/in/florianbgt" target="blank">https://linkedin.com/in/florianbgt</a>
                        </big>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">
                        <fa :icon="['fas', 'envelope']" style="font-size: 30px"/>
                    </td>
                    <td class="pl-2">
                        <big>
                            <a href="mailto:florian.bigot321@gmail.com">florian.bigot321@gmail.com</a>
                        </big>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">
                        <fa :icon="['fas', 'phone']" style="font-size: 30px"/>
                    </td>
                    <td class="pl-2">
                        <big>
                            <a href="tel:+1 401-316-8293">+1 401-316-8293</a>
                        </big>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">
                        <fa :icon="['fas', 'file']" style="font-size: 30px"/>
                    </td>
                    <td class="pl-2">
                        <big>
                            <a href="/Resume-Florian-Bigot.pdf">My PDF resume</a>
                        </big>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>