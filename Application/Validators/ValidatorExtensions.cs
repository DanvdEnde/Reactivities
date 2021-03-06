using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
            .MaximumLength(8)
            .WithMessage("Password must be atleast 8 characters long.")
            .Matches("[A-Z]")
            .WithMessage("Password must contain a uppercase letter.")
            .Matches("[a-z]")
            .WithMessage("Password must contain a lowercase letter.")
            .Matches("[0-9]")
            .WithMessage("Password must contain a number.")
            .Matches("[^a-zA-Z0-9]")
            .WithMessage("Password must contain non alphanumeric characers");

            return options;
        }
    }
}