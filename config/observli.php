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
    'billing_enabled' => env('BILLING_ENABLED', false),
    'usage' => [
        'limits' => [
            'events' => [
                'free' => 250,
                'startup' => 2500,
                'pro' => 25000,
            ],
            'retention' => [
                'free' => 14,
            ],
        ],
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