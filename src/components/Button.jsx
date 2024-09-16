import PropTypes from "prop-types";

function ButtonPrimary({href, target = '_blank', label, icon, classes}) {

    if (href) {
        return (
            <a href={href}
               target={target}
               className={`btn btn-primary ${classes}`}>
                {label}
                {icon && <span className="material-symbols-rounded" aria-hidden={true}>{icon}</span>}
            </a>
        )
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon && <span className="material-symbols-rounded" aria-hidden={true}>{icon}</span>}
            </button>
        )
    }

}

ButtonPrimary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string,
}

//Button Secondary

function ButtonSecondary({href, target = '_self', label, icon, classes}) {

    if (href) {
        return (
            <a href={href}
               target={target}
               className={`btn btn-secondary ${classes}`}>
                {label}
                {icon && <span className="material-symbols-rounded" aria-hidden={true}>{icon}</span>}
            </a>
        )
    } else {
        return (
            <button className={`btn btn-secondary ${classes}`}>
                {label}
                {icon && <span className="material-symbols-rounded" aria-hidden={true}>{icon}</span>}
            </button>
        )
    }

}

ButtonSecondary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string,
}
export {
    ButtonPrimary,
    ButtonSecondary
}