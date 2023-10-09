<?php  

return [
    'actions' => [
        'types' => [
            'auto' => [
                
            ],
            'manual' => [
                'visit_url' => [
                    'url' => 'url'
                ]
            ]
        ]
    ],
    'usage' => [
        'types' => [
            'action' => [
                'failed' => 'action.failed',
                'succeeded' => 'action.succeeded',
            ],
            'event' => [
                'created' => 'event.created',
                'deleted' => 'event.deleted',
            ],
            'topic' => [
                'created' => 'topic.created',
                'deleted' => 'topic.deleted',
            ],
            'workspace' => [
                'created' => 'workspace.created',
                'deleted' => 'workspace.deleted',
                'invited' => 'workspace.user.invited',
            ],
        ]
    ]
];