<template>
  <b-container class="py-5" style="max-width: 600px">
    <h1 class="text-center">My Timeline</h1>
    <TimelineItem
      :title="{ icon: ['fas', 'user'], value: 'Product Developement Engineer' }"
      date="Jan 2019 to Present"
      :place="{ icon: ['fas', 'briefcase'], value: 'Hutchinson (USA)' }"
    >
      <strong>Web applications development, deployment, and maintenance</strong>
      <ul class="pl-3">
        <li>
          Web applications development using Django REST APIs and Vue universal
          applications (SPA with PWA and SSR capabilities)
        </li>
        <li>
          Extensive use of Docker from development to production
        </li>
        <li>
          Conversion of windows based scientific computing libraries into a
          pluggable Linux container using Docker
        </li>
        <li>
          Regular deployments and maintenance of a web applications on a Linux
          server
        </li>
      </ul>
      <strong
        >Technology transfer from France to the USA & new product
        development</strong
      >
      <ul class="pl-3">
        <li>
          Adapted and integrated global standard design for static and dynamic
          sealing solutions to US customers
        </li>
        <li>
          Implemented additive manufacturing methods (FDM 3D printing
          technologies) to reduce cost and time of internal and customer
          prototype testing
        </li>
        <li>
          Responsible for Design, validation, and component sourcing for all
          non-standard new product development
        </li>
      </ul>
    </TimelineItem>
    <div class="text-center">
      <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px" />
    </div>
    <TimelineItem
      :title="{ icon: ['fas', 'user'], value: 'Project manager' }"
      date="Aug 2018 to Dec 2018"
      :place="{ icon: ['fas', 'briefcase'], value: 'Hutchinson (France)' }"
    >
      <strong
        >Project management of molded static sealing solutions from the
        quotation to the Start of Production (SOP)</strong
      >
      <ul class="pl-3">
        <li>
          Collaborated with the customer on all technical aspects of the project
          while engaging with the cross-functional teams
        </li>
        <li>
          Managed multi-disciplinary teams’ activities across design, CAE,
          laboratory, prototype, industrialization, quality, and production
        </li>
      </ul>
    </TimelineItem>
    <div class="text-center">
      <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px" />
    </div>
    <TimelineItem
      :title="{
        icon: ['fas', 'graduation-cap'],
        value: 'Msc in Mechanical Engineering'
      }"
      date="Jul 2018"
      :place="{
        icon: ['fas', 'university'],
        value: 'University of Technology of Compiègne (France)'
      }"
    >
      <strong
        >Graduated with a GPA of 3.78/4 with an innovarive material
        specialty</strong
      >
    </TimelineItem>
    <div class="text-center">
      <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px" />
    </div>
    <TimelineItem
      :title="{ icon: ['fas', 'user'], value: 'CAE Engineer intern' }"
      date="Jan 2018 to Jul 2018"
      :place="{ icon: ['fas', 'briefcase'], value: 'Hutchinson (France)' }"
    >
      <strong
        >Perform Scientific Computation aided product validation and
        optimization</strong
      >
    </TimelineItem>
    <div class="text-center">
      <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px" />
    </div>
    <TimelineItem
      :title="{ icon: ['fas', 'user'], value: 'Innovation Engineer intern' }"
      date="Sep 2016 to Feb 2017"
      :place="{
        icon: ['fas', 'briefcase'],
        value: 'Coriolis Composites (France)'
      }"
    >
      <strong
        >Optimize the design of an innovative hydro foil for the racing yacht
        industry (from Sep 2017 to Feb 2018)</strong
      >
      <br />
      <strong
        >Patented an innovative reinforcement design to prevent crack
        propagation in carbon fiber reinforced structures (from Jan 2017 to Jun
        2017)</strong
      >
    </TimelineItem>
    <div class="text-center">
      <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px" />
    </div>
    <TimelineItem
      :title="{
        icon: ['fas', 'graduation-cap'],
        value: 'Bsc in Material Science'
      }"
      date="Jul 2015"
      :place="{
        icon: ['fas', 'university'],
        value: 'Institute of Technology of Saint-Brieuc (France)'
      }"
    >
      <strong>Graduated 5/55</strong>
    </TimelineItem>
    <div class="text-center">
      <fa :icon="['fas', 'ellipsis-v']" style="font-size: 50px" />
    </div>
    <TimelineItem
      :title="{ icon: ['fas', 'user'], value: 'R&D Technician intern' }"
      date="Apr 2015 - Jul 2015"
      :place="{
        icon: ['fas', 'university'],
        value: 'The University of Sheffield (UK)'
      }"
    >
      <strong>Assist research on new fiber reinforced materials</strong>
    </TimelineItem>
  </b-container>
</template>
