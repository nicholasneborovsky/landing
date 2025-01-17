import classNames from 'classnames';
import InternalLink from './InternalLink';

const NavTile = ({ to, className, title, children, background, bgPosition = 'center' }) => (
    <div className="w-58">
        <InternalLink
            href={to}
            className={`transition duration-300 transform-gpu shadow-inner outline-none relative bg-gray-800 bg-cover rounded-xl ring-1 overflow-hidden scale-100 hover:scale-105 shadow w-full p-4 no-underline bg-gradient-to-bl h-full flex flex-col justify-between ${
                className ?? ''
            }`}
        >
            {background && (
                <img
                    src={background}
                    className="z-0 mix-blend-overlay absolute inset-0 m-0 h-full w-full"
                    style={{ objectFit: 'cover', objectPosition: bgPosition }}
                    objectFit="cover"
                    objectPosition={bgPosition}
                />
            )}
            <div className="z-1 relative">
                <div className={classNames('text-sm text-gray-100')}>{children}</div>
            </div>
        </InternalLink>
        <style jsx>{`
            div > :global(p) {
                margin: 0;
            }
        `}</style>
    </div>
);

NavTile.Title = ({ children }) => <h3 className={classNames('text-xl m-0 mb-4')}>{children}</h3>;

export default NavTile;
