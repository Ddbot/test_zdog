import React from "react";
import styled from 'styled-components';

const ErrorShell = styled.p``;

function ErrorMessage(props) {
	const { errorCode } = props;

	function getErrorMessage() {
		switch (errorCode) {
			case "missing-email":
				return props.lang === "en" ? "Malformed or missing email" : "Email manquant ou mal écrit";
			case "missing-acceptance":
				return props.lang === "en" ? "Please check to accept T&Cs" : "Veuillez accepter les termes d'utilisation";					
			case "user-name-required":
				return props.lang === "en" ? "Please provide your name" : "Veuillez donner un nom";

			default:
				return "Oops, something went wrong.";
		}
	}

	return errorCode ? (
		<ErrorShell className="help is-danger">
			<span className="icon is-small is-right" style={{ color: "red" }}>
				<i className="fa fa-exclamation-triangle"></i>
			</span>
			{getErrorMessage()}
		</ErrorShell>
	) : null;
}

export default ErrorMessage;
