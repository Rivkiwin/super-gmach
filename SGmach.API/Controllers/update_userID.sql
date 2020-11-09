-- SQLite
UPDATE   Repayments set  UserId =(SELECT UserId From Loans
WHERE Repayments.LoanId=Loans.LoanId)