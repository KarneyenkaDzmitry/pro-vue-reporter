"use strict";

// const reporter = {
//     "title": "TITLE",
//     "description": "Description",
//     "statistic": {
//         "passed": 21,
//         "failed": 2,
//         "skipped": 1
//     },
//     "features": [
//         {
//             "name": "Feature name",
//             "tags": [],
//             "time": "25 seconds",
//             "status": "passed",
//             "scenarious": [
//                 {
//                     "name": "Scenario name",
//                     "tags": [],
//                     "time": "25 seconds",
//                     "status": "passed",
//                     "steps": [
//                         {
//                             "name": "Step name",
//                             "time": "25 seconds",
//                             "status": "failed",
//                             "error": "Some Error",
//                             "screenshort": "path to screenshort"
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// };
const title = new Vue({
    el: '#title',
    data: {
        title: "Protractor reporter based on Vue.js"
    }
});

Vue.component('features', {
    template: `<div class="panel-group feature label-danger">
                                <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" href="#collapse1">
                                                    <div class="row">
                                                        <div class="col-sm-10"><strong>Feature: </strong>Careers</div>
                                                        <div class="col-sm-2 duration">1 m 42 s</div>
                                                    </div>
                                                </a>
                                            </h4>
                                        </div>
                                    <div id="collapse1" class="panel-collapse collapse">
                                        <ul class="list-group">
                                            <scenarios></scenarios>
                                        </ul>
                                    </div>
                                </div>
                            </div>`
});

Vue.component('scenarios', {
    template: `<li class="list-group-item scenario label-failed">
                            <div class="panel-group">
                                <div class="panel panel-default">
                                    <div class="panel-heading label-success">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" href="#collapse2">
                                                <div class="row">
                                                    <div class="col-sm-10"><strong>Scenario:</strong>search jobs by keyword JavaScript</div>
                                                    <div class="col-sm-2 duration">1 m 42 s</div>
                                                </div>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" class="panel-collapse collapse">
                                        <ul class="list-group">
                                            <steps></steps>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>`
});

Vue.component('steps', {
    template: `<li class="list-group-item step label-danger">
                            <div class="row">
                                <div class="col-sm-10">
                                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <strong>Then</strong>'search results' should not be present
                                    </a>
                                </div>
                                <div class="col-sm-1 screenshot">
                                    <a href="ref" alt="name" title="name" target="_blank">screen</a>
                                </div>
                                <div class="col-sm-1 duration">20 s</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body">Error text</div>
                                    </div>
                                </div>
                            </div>
                        </li>`
});

let reporter = new Vue({
    el: "#report",
    data: {
        project: "Protractor reporter based on Vue.js",
        url: "https://github.com/KarneyenkaDzmitry/cucumber-json-reporter-to-html",
        date: "Today"
    },
    computed: {
        now() {
            return date === 'Today' ? Date.now() : date;
        }
    }
});

