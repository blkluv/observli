<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Event
 *
 * @property int $id
 * @property int $workspace_id
 * @property string $title
 * @property string|null $subtitle
 * @property object $context
 * @property array $actions
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Topic> $topics
 * @property-read int|null $topics_count
 * @property-read \App\Models\Workspace $workspace
 * @method static \Illuminate\Database\Eloquent\Builder|Event newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event query()
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereActions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereContext($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereWorkspaceId($value)
 */
	class Event extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Membership
 *
 * @property int $id
 * @property int $workspace_id
 * @property int $user_id
 * @property string|null $role
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $user
 * @property-read \App\Models\Workspace $workspace
 * @method static \Illuminate\Database\Eloquent\Builder|Membership newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Membership newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Membership query()
 * @method static \Illuminate\Database\Eloquent\Builder|Membership whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Membership whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Membership whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Membership whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Membership whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Membership whereWorkspaceId($value)
 */
	class Membership extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Topic
 *
 * @property int $id
 * @property int $workspace_id
 * @property string $name
 * @property string $slug
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Event> $events
 * @property-read int|null $events_count
 * @property-read \App\Models\Workspace $workspace
 * @method static \Illuminate\Database\Eloquent\Builder|Topic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Topic newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Topic query()
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereWorkspaceId($value)
 */
	class Topic extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Usage
 *
 * @property int $id
 * @property int $workspace_id
 * @property int|null $user_id
 * @property string $type
 * @property string $timestamp
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $user
 * @property-read \App\Models\Workspace $workspace
 * @method static \Illuminate\Database\Eloquent\Builder|Usage eventCreated()
 * @method static \Illuminate\Database\Eloquent\Builder|Usage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Usage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Usage query()
 * @method static \Illuminate\Database\Eloquent\Builder|Usage successfulAction()
 * @method static \Illuminate\Database\Eloquent\Builder|Usage today()
 * @method static \Illuminate\Database\Eloquent\Builder|Usage whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Usage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Usage whereTimestamp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Usage whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Usage whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Usage whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Usage whereWorkspaceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Usage yesterday()
 */
	class Usage extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $email_verified_at
 * @property int|null $current_workspace_id
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Workspace|null $currentWorkspace
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Workspace> $ownedWorkspaces
 * @property-read int|null $owned_workspaces_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Workspace> $workspaces
 * @property-read int|null $workspaces_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCurrentWorkspaceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Workspace
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string|null $domain
 * @property string|null $avatar
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Event> $events
 * @property-read int|null $events_count
 * @property-read mixed $daily_action_change_percentage
 * @property-read mixed $daily_event_change_percentage
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\WorkspaceInvitation> $invitations
 * @property-read int|null $invitations_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \App\Models\User $owner
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Topic> $topics
 * @property-read int|null $topics_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Usage> $usage
 * @property-read int|null $usage_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace query()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereDomain($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Workspace withoutTrashed()
 */
	class Workspace extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\WorkspaceInvitation
 *
 * @property int $id
 * @property int $workspace_id
 * @property string $name
 * @property string $email
 * @property string|null $role
 * @property string $token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Workspace $workspace
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation query()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WorkspaceInvitation whereWorkspaceId($value)
 */
	class WorkspaceInvitation extends \Eloquent {}
}

