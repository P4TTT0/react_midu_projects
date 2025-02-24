import { useState } from 'react';
import './TwitterFollowCard.css'

interface TwitterCardProps
{
    userName: string;
    isFollowing: boolean;
    children: React.ReactNode;
}

const TwitterFollowCard: React.FC<TwitterCardProps> = ({userName, isFollowing, children}) => 
{
    const [followingState, setFollowingState] = useState(isFollowing);

    const followButtonText = followingState ? 'Siguiendo' : 'Seguir';
    const followButtonClasName = followingState ? "follow-card-button is-following" : "follow-card-button";
    const imageSource: string = `https://unavatar.io/${userName}`;

    const onFollowButtonClick = () => setFollowingState(!followingState);

    return (
        <article>
            <header>
                <img 
                    src={imageSource} 
                    alt="User image" 
                />
                <div className='user-info-container'>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={followButtonClasName} onClick={onFollowButtonClick}>
                    <span className='follow-text'>{followButtonText}</span>
                    <span className='unfollow-text'>Dejar de seguir</span>
                </button>
            </aside>
        </article>  
    );
}

export default TwitterFollowCard;