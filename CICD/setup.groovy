pipelineJob('outside-games') {
    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        github('williamowen65/og')
                    }
                    branch('*/main')
                }
            }
            scriptPath('CICD/Jenkinsfile')
        }
    }
    triggers {
        // githubPush()
        pollSCM{
            scmpoll_spec('H/1 * * * *')
        }
    }

}