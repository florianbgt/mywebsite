<template>
    <b-container class="py-5" style="max-width: 600px">
        <h1 class="text-center">My Timeline</h1>
        <TimelineItem
            :title="{icon: ['fas', 'user'], value: 'Product Developement Engineer'}"
            date='Jan 2019 to Present'
            :place="{icon: ['fas', 'briefcase'], value: 'Hutchinson (USA)'}"
        >
        </TimelineItem>
        <div class="text-center">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
        </div>
        <TimelineItem
            :title="{icon: ['fas', 'user'], value: 'Project manager'}"
            date='Aug 2018 to Dec 2018'
            :place="{icon: ['fas', 'briefcase'], value: 'Hutchinson (France)'}"
        >
        </TimelineItem>
        <div class="text-center">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
        </div>
        <TimelineItem
            :title="{icon: ['fas', 'graduation-cap'], value: 'Msc in Mechanical Engineering'}"
            date='Jul 2018'
            :place="{icon: ['fas', 'university'], value: 'University of Technology of Compiègne (France)'}"
        >
        Got my engineering degree!
        </TimelineItem>
        <div class="text-center">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
        </div>
        <TimelineItem
            :title="{icon: ['fas', 'user'], value: 'CAE Engineer intern'}"
            date='Jan 2018 to Jul 2018'
            :place="{icon: ['fas', 'briefcase'], value: 'Hutchinson (France)'}"
        >
        First time developing some software (VBA applications)
        </TimelineItem>
        <div class="text-center">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
        </div>
        <TimelineItem
            :title="{icon: ['fas', 'user'], value: 'Innovation Engineer intern'}"
            date='Sep 2016 to Feb 2017'
            :place="{icon: ['fas', 'briefcase'], value: 'Coriolis Composites (France)'}"
        >
        My first job as an engineer. I loved it!
        </TimelineItem>
        <div class="text-center">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
        </div>
        <TimelineItem
            :title="{icon: ['fas', 'graduation-cap'], value: 'Bsc in Material Science'}"
            date='Jul 2015'
            :place="{icon: ['fas', 'university'], value: 'Institute of Technology of Saint-Brieuc (France)'}"
        >
        Got my first diploma in material science!
        </TimelineItem>
        <div class="text-center">
            <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px"/>
        </div>
        <TimelineItem
            :title="{icon: ['fas', 'user'], value: 'R&D Technician intern'}"
            date='Apr 2015 - Jul 2015'
            :place="{icon: ['fas', 'university'], value: 'The University of Sheffield (UK)'}"
        >
        Inventing tomorow's material for the areospace industry!
        </TimelineItem>
    </b-container>
</template>